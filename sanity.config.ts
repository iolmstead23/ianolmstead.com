import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'OlmsteadBlog',
  projectId: 'mkqmpj82',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  apiVersion: "2024-02-25",
  schema: {
    types: schemaTypes,
  },
})
