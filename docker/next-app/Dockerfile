FROM node:20-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./

# Omit --production flag for TypeScript devDependencies
RUN yarn install --frozen-lockfile

COPY src ./src
COPY public ./public

# Add all necessary config files here
COPY next.config.ts .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG API_GRAPHQL_URL
ENV API_GRAPHQL_URL=${API_GRAPHQL_URL}
ARG NEXT_PUBLIC_API_GRAPHQL_URL
ENV NEXT_PUBLIC_API_GRAPHQL_URL=${NEXT_PUBLIC_API_GRAPHQL_URL}
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
ARG NEXT_PUBLIC_BLUE_COLLAR_STRIPE_RETURN_URL
ENV NEXT_PUBLIC_BLUE_COLLAR_STRIPE_RETURN_URL=${NEXT_PUBLIC_BLUE_COLLAR_STRIPE_RETURN_URL}
ARG NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_ID
ENV NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_MAPS_CLIENT_ID}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js app
RUN yarn build

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Uncomment the following line to disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["node", "server.js"]
