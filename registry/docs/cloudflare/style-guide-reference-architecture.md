# Reference architecture

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/content-types/reference-architecture.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Reference architecture

## Purpose

The purpose of a [reference architecture](https://developers.cloudflare.com/reference-architecture/) is to provide a high-level view of how all or part of the Cloudflare platform is built and how Cloudflare products would fit into a customer's existing infrastructure. Reference architectures are designed to show where our platform fits in with a customer's current environment and describe key aspects of a Cloudflare feature/service. Reference architectures should also map customer use cases to Cloudflare solutions.

Reference architectures are typically very detailed. To describe a single architecture without much written content, use a [Reference architecture diagram](https://developers.cloudflare.com/style-guide/documentation-content-strategy/content-types/reference-architecture-diagram/).

Disambiguation

This page describes the content strategy for a reference architecture. For help with Cloudflare products, refer to [Reference archiectures](https://developers.cloudflare.com/reference-architecture/).

## Tone

guiding, straightforward

## content\_type

```

pcx_content_type: reference-architecture


```

For more details, refer to [pcx\_content\_type](https://developers.cloudflare.com/style-guide/frontmatter/custom-properties/#pcx%5Fcontent%5Ftype).

## Examples

[Cloudflare Load Balancing Reference Architecture](https://developers.cloudflare.com/reference-architecture/architectures/load-balancing/)

[Magic Transit Reference Architecture](https://developers.cloudflare.com/reference-architecture/architectures/magic-transit/)

[Evolving to a SASE architecture with Cloudflare](https://developers.cloudflare.com/reference-architecture/architectures/sase/)

## Components

### Most used

- [PublicStats](https://developers.cloudflare.com/style-guide/components/public-stats/):\
  The `PublicStats` component allows you to reference specific values about Cloudflare's network without maintaining those values in multiple files.
- [Diagrams](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/): Particularly helpful for image captions.

### Required

[**Title**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/titles/): Short verb phrase in second-person imperative. Do not use gerund phrases.

[**Introduction**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/introduction/): Two to three paragraphs describing the document subject matter.

[**Intended audience**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/intended-audience/): Description of who the document is written for and what they will learn.

[**Reference diagram**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/reference-diagram/): A single diagram that reflects the overall reference architecture.

### Optional

[**Notes/warnings**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/notes-tips-warnings/)

[**Examples**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/examples/)

[**Diagrams**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/diagrams/)

**Screenshots**

[**Related links**](https://developers.cloudflare.com/style-guide/documentation-content-strategy/component-attributes/links/): Bulleted list of links to associated resources.

## Template

```

---

title: Cloudflare Reference Architecture

pcx_content_type: reference-architecture

weight: 1

meta:

    title: "Reference Architecture: An example Cloudflare solution"

---


# Cloudflare Reference Architecture


## Introduction

Cloudflare provides software as a service solutions (SaaS) solutions for performance, security, reliability, and developer services. This reference architecture focuses on the security of the platform and the network these services are built on, as well as the broad security capabilities the services offer for both public facing and internal facing assets.


### Who is this document for?

This reference architecture is designed for IT or security professionals with some responsibility over or familiarity with their organization’s existing infrastructure. It is useful to have some experience with technologies important to securing hybrid work, including identity providers (IdPs), user directories, single sign on (SSO), endpoint security or management (EPP, XDR, UEM, MDM), firewalls, routers, and point solutions like packet or content inspection hardware, threat prevention, and data loss prevention technologies.


## Heading 1

### Subheading 1

Start by describing the technology which this architecture refers to. Ideally you open with a diagram that either describes the final architecture, or is a base diagram from which the document will build.


![Example reference architecture diagram](/images/reference-architecture/cloudflare-one-reference-architecture-images/cf1-ref-arch-14.svg "The above is an example reference architecture diagram")


## Heading 2

### Subheading 2

Then introduce how Cloudflare fits in


## Heading 3

### Subheading 4

Start to dig into the details of the technology


## Heading 5

### Subheading 5

End with mapping the architecture to real world use cases. Important to connect the reader to how this architecture is used in their own organization.


## Summary

End the document by summarizing everything so far and provide a list of further reading


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/","name":"Content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/content-types/reference-architecture/","name":"Reference architecture"}}]}
```
