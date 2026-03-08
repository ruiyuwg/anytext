# Documentation guidelines

> Guide for contributing to Deno's documentation. Learn our documentation standards, writing style, and how to submit documentation changes.

URL: https://docs.deno.com/runtime/contributing/docs

We welcome and appreciate contributions to the Deno documentation. If you find
an issue, or want to add to the docs, each page has an "Edit this page" button
at the bottom of the page. Clicking this button will take you to the source file
for that page in the [Deno docs repository](https://github.com/denoland/docs/).
You can then make your changes and submit a pull request.

Some pages in the Deno documentation are generated from source files in the Deno
repository. These pages are not directly editable:

- The [API reference](/api/deno/) pages are generated from type definitions in
  the Deno repository.
- The [CLI reference](/runtime/reference/cli/) pages for each individual command
  are generated from source files in the Deno repository.

If you find an issue with one of these pages, you can either submit a pull
request to the Deno repository. Or raise an issue in the
[Deno docs repository](https://github.com/denoland/docs/issues) and we'll get it
fixed.

## Running the docs locally

You can fork and clone the entire
[Deno docs repository](https://github.com/denoland/docs) to your local machine
and run the docs locally. This is useful if you want to see how your changes
will look before submitting a pull request.

1. Fork the [Deno docs repository](https://github.com/denoland/docs).
2. Clone your fork to your local machine with `git clone`.
3. Change directory into the `docs` directory you just cloned.
4. Run the docs repo locally with `deno task serve`.
5. Open your browser and navigate to `http://localhost:3000`.
6. Optionally, generate the API documentation with `deno task reference`.

To see a more detailed description of available tasks, check out the
[Deno docs README](https://github.com/denoland/docs?tab=readme-ov-file#deno-docs)

***

# Contributing an example

> Learn how to create and contribute meaningful examples to the Deno docs.

URL: https://docs.deno.com/runtime/contributing/examples

[Deno by Example](/examples/) is a collection of examples that demonstrate how
to use Deno and its APIs. If you contribute an example, we'll send you a free
pack of stickers!

![Deno stickers laid out on a table](./images/stickers.jpg)

## Contributing an example

If you have a Deno example that you would like to share with the community, you
can contribute it to the
[Deno docs repository](https://github.com/denoland/docs?tab=readme-ov-file#examples)
or make an issue if there's an example you'd like to see. If your example is
merged, we'll credit you as the author and send you some awesome special edition
Deno stickers so that you can show off your contributor status as a token of our
appreciation.

## Getting your stickers

If you've contributed an example, drop us an email at
<docs@deno.com> and let us know so we can get your
stickers out to you!

***
