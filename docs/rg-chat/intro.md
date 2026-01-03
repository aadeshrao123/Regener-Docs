# RG Chat System

Welcome to the **RG Chat System** documentation. This plugin provides a robust, modular, and multiplayer-ready chat solution for Unreal Engine projects.

## Features

- 🌐 **Multiplayer Ready**: Built with replication in mind, supporting Server-Client architecture.
- 📦 **Modular Design**: Easy to integrate into existing projects via the `URGChatComponent`.
- 🏷️ **Gameplay Tags Driven**: Channels and message filtering are powered by Unreal's Gameplay Tags.
- ⚙️ **Highly Configurable**: Control rate limits, channel colors, and range-based chat through Data Assets.
- 👥 **Party & Direct Chat**: Built-in support for private messaging and party-specific channels.
- 🚫 **Blocking System**: Integrated player blocking functionality.

## Quick Start

To get started with the RG Chat System, follow these steps:

1. [Installation](./getting-started/installation)
2. [Configuration](./getting-started/configuration)
3. [Component Setup](./getting-started/setup)

## Core Components

- **`URGChatComponent`**: The heart of the system, attached to your `PlayerState`.
- **`URGChatData`**: A Data Asset used to define your chat channels and rules.
- **`IRGChatParticipantInterface`**: Interface to provide player-specific chat data like display names and party IDs.
