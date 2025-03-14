# Use Node.js 20 Alpine as base image
FROM node:20-alpine AS base

# Step 1. Build the application
FROM base AS builder

WORKDIR /QuantumRoboticsLab

# Install dependencies only using Yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy application source code
COPY . .

# Build the Next.js application
RUN yarn build

# Step 2. Create production image
FROM base AS runner

WORKDIR /QuantumRoboticsLab

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
USER nextjs

# Copy necessary files from builder stage
COPY --from=builder /QuantumRoboticsLab/public ./public
COPY --from=builder --chown=nextjs:nodejs /QuantumRoboticsLab/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /QuantumRoboticsLab/.next/static ./.next/static

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Start the Next.js application
CMD ["node", "server.js"]
