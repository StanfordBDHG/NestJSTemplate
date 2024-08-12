//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { configDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      include: ['**/*.ts', '**/*.tsx', '**/*.js'],
      exclude: [
        ...(configDefaults.coverage.exclude ?? ['']),
        '**/build/**',
        '**/node_modules/**',
        '**/.storybook/**',
        '**/*.config.*',
        '**/*.stories.tsx',
      ],
    },
  },
})
