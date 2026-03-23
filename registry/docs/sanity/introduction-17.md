# Introduction

While the Studio provides an excellent out-of-the-box experience, its true power lies in its extensive customization capabilities. The React-based framework lets you tailor the editorial experience to your specific workflows.

With Sanity Studio customization, you can:

- **Create custom input components** to provide specialized editing interfaces for your content.
- **Design custom document views** and structure to organize content in ways that make sense for your team.
- **Add visual enhancements** with custom icons, theming, and UI components.
- **Extend functionality** with plugins and custom tools that integrate with your existing systems.
- **Localize** the Studio interface to support your global team's preferred languages.

> \[!TIP]
> Studio or App SDK?
> Sanity Studio is a fully featured Content Management System (CMS) based on your schemas. While highly customizable and extendable, it does come with the assumptions and all the bells and whistles of a CMS.
> If you rather need a highly specialized workflow or tool to interact with your content without front-loading the entire editorial toolkit, you might consider building a custom application using the [App SDK](https://www.sanity.io/docs/app-sdk).

## Core concepts

Sanity Studio is built from the ground up with customization in mind. Understanding these core customization areas will help you create the perfect editing environment for your team.

### Custom components

The Studio's form builder automatically creates editing interfaces based on your schema definitions, but you can replace any input component with your own custom React component. This allows you to create specialized editing experiences for specific content types or fields.

Custom components can range from simple UI enhancements to complex interfaces that integrate with external services or provide specialized editing capabilities.

#### Develop custom components

[Custom component for Sanity Studio](https://www.sanity.io/docs/studio/intro-to-custom-studio-components)

[Form Components](https://www.sanity.io/docs/studio/form-components)

#### Example components and tutorials

[Create a time duration object field](https://www.sanity.io/docs/developer-guides/create-a-time-duration-object-field)

[Create a “coupon generator” string field input](https://www.sanity.io/docs/developer-guides/create-a-coupon-generator-string-field-input)

[Create an array input field with selectable templates](https://www.sanity.io/docs/developer-guides/create-an-array-input-field-with-selectable-templates)

[Create a document form progress component](https://www.sanity.io/docs/developer-guides/create-a-document-progress-root-level-component)

[Create a visual string selector field input](https://www.sanity.io/docs/developer-guides/create-a-rich-string-selector-field-input)

[Create a survey rating number field input](https://www.sanity.io/docs/developer-guides/create-a-survey-rating-number-field-input)

[Create a time duration object field](https://www.sanity.io/docs/developer-guides/create-a-time-duration-object-field)

### Structure builder

The Structure Builder gives you complete control over how documents are organized and presented in the Studio. You can customize document lists, create custom views, build specialized navigation, and design intuitive workflows for your content editors.

With Structure Builder, you can move beyond the default document type lists to create an information architecture that matches your team's mental model of the content.

#### Get started with structure builder

[Structure tool and Structure builder](https://www.sanity.io/docs/studio/structure-introduction)

### Visual customization

Sanity Studio can be visually customized to match your brand or to improve the editing experience. This includes:

- **Theming**: Customize colors, typography, and spacing.
- **Icons**: Replace default icons with custom ones for document types and fields.
- **Sanity UI**: Use the built-in UI component library to create consistent interfaces.
- **Favicons**: Add your own favicon to make the Studio recognizable in browser tabs.

#### Bring your brand to Studio

[Icons](https://www.sanity.io/docs/studio/icons-for-data-types)

[Favicons](https://www.sanity.io/docs/studio/favicons)

[Theming](https://www.sanity.io/docs/studio/theming)

[Sanity UI](https://www.sanity.io/docs/studio/sanity-ui)

### Tools and plugins

The Studio can be extended with custom tools and plugins that add new functionality to the editing environment:

- **Custom tools**: Create entirely new sections in the Studio for specialized workflows.
- **Plugins**: Install or create plugins that add features like the Dashboard, Comments, or AI Assist.
- **Integrations**: Connect the Studio to external services and systems.

#### Popular tools and plugins

[The Vision Plugin](https://www.sanity.io/docs/content-lake/the-vision-plugin)

[AI Assist for Studio](https://www.sanity.io/docs/studio/install-and-configure-sanity-ai-assist)

[Explore the Sanity Exchange](https://www.sanity.io/exchange)

## Limitations

- Custom components should be compatible with Sanity's real-time collaboration system.
- Some advanced customizations may require deeper knowledge of React and Sanity's internal APIs.
- Custom tools and plugins may need to be updated when new versions of the Studio are released.
