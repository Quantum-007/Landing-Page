# Base image
FROM node:20-alpine AS base

# Build stage
FROM base AS builder
WORKDIR /app

# Print current working directory
RUN echo "Current working directory: $(pwd)"

# Copy the package.json, yarn.lock first (for caching purposes)
COPY package.json yarn.lock ./
RUN echo "Copied package.json and yarn.lock"

# Copy Prisma schema files before installing dependencies
COPY prisma ./prisma
RUN echo "Copied Prisma schema files"

# Install dependencies
RUN echo "Installing dependencies..." && yarn install --frozen-lockfile && echo "Dependencies installed successfully"

# Copy source code and public assets
COPY src ./src
COPY public ./public
RUN echo "Copied source code and public assets"

# Add all necessary config files here
COPY next.config.ts .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
RUN echo "Copied Next.js configuration files"

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN echo "Starting Next.js build..." && yarn run build && echo "Next.js build completed"

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
RUN echo "Created non-root user nextjs"

COPY --from=builder /app/public ./public
RUN echo "Copied public assets"

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN echo "Copied Next.js build output"

# Disable telemetry at runtime
ENV NEXT_TELEMETRY_DISABLED 1

# Start application
CMD echo "Starting application..." && node server.js
