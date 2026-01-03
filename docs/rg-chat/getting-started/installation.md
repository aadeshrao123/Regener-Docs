# Installation

To install the **RG Chat System** plugin into your Unreal Engine project:

1. **Copy the Plugin**: Copy the `RG_Chat` folder into your project's `Plugins` directory. If the `Plugins` folder doesn't exist, create it in your project's root directory.
2. **Restart Unreal Engine**: Launch your project. Unreal Engine should prompt you that a new plugin has been found.
3. **Enable the Plugin**: Go to `Edit -> Plugins`, search for "RG Chat", and ensure it is enabled.
4. **Rebuild (C++ Projects)**: If you are using a C++ project, right-click your `.uproject` file and select "Generate Visual Studio project files", then rebuild your project in IDE.

## Dependencies

The plugin depends on the following built-in Unreal Engine modules:
- `GameplayTags`
- `DeveloperSettings`
