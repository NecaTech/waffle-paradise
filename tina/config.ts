import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: 'main',
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Contenu',
            isBody: true,
          },
        ],
      },
      {
        name: 'menu',
        label: 'Menu',
        path: 'content/menu',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
          },
          {
            type: 'object',
            name: 'items',
            label: 'Items du Menu',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Nom',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'string',
                name: 'price',
                label: 'Prix',
              },
              {
                type: 'image',
                name: 'image',
                label: 'Image',
              },
            ],
          },
        ],
      },
    ],
  },
})
