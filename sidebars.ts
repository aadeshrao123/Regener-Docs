export default {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'RG Plugins',
      items: [
        {
          type: 'category',
          label: 'RG Chat System',
          items: [
            'rg-chat/intro',
            {
              type: 'category',
              label: 'Getting Started',
              items: [
                'rg-chat/getting-started/installation',
                'rg-chat/getting-started/configuration',
                'rg-chat/getting-started/setup',
              ],
            },
            {
              type: 'category',
              label: 'API Reference',
              items: [
                'rg-chat/api/chat-component',
                'rg-chat/api/participant-interface',
                'rg-chat/api/data-structures',
              ],
            },
            {
              type: 'category',
              label: 'Advanced Guides',
              items: [
                'rg-chat/guides/party-chat',
                'rg-chat/guides/proximity-chat',
                'rg-chat/guides/commands',
                'rg-chat/guides/ui-integration',
              ],
            },
          ],
        },
      ],
    },
  ],
};
