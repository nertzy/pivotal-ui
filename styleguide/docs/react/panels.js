/*doc
---
title: Panels
name: panel_react
categories:
 - react_components_panels
 - react_all
---

<code class="pam">
<img src="/styleguide/download.svg" width="16" height="16"/>
npm install pui-react-panels --save
</code>

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
header         | no | Node                   | | Node to render in the header
footer         | no | Node                   | | Node to render in the footer
actions        | no | Node                   | | Node to render as actions in the header (recommended: array of nodes)
subtitle       | no | Node                   | | An element or text to render as the subtitle in the header (only works if header is a string)
innerClassName | no | String                 | | The className to be added on the panel body
padding        | no | String                 | | Padding to use on the panel body using OOCSS naming convention (e.g pam, pan, phl, ptl)
scrollable     | no | oneOf(Boolean, Number) | | Use default scrolling height when boolean or a specified scrolling height

## Basic usage

Import the subcomponents:

```
import {Panel} from 'pui-react-panels';
```

Panel components are straightforward implementations of the [Panel][panel]
styling. The `Panel` component itself is the base, and there are many different
flavors of Panels which all construct a particularly styled `Panel`.

A `ScrollingPanel` is created by using a `Panel` component and including a true value for the `scrollable`
property. Alternatively, if this value is a number, it will become the height of the scrollable panel in pixels.

See examples below.

```react_example_table
<Panel className="bg-neutral-10">
  <p>Base Panel</p>
</Panel>

<Panel className="bg-neutral-10 optional-class" innerClassName="opt-inner-class">
  <p>Base Panel</p>
</Panel>

<Panel className="bg-neutral-10" header='header'>
  Base Panel with base header
</Panel>

<Panel className="bg-neutral-10" header="Title" subtitle="subtitle">
  Base Panel with subtitle
</Panel>

<Panel className="bg-neutral-10" header={<h2>Custom Title</h2>}>
  Base Panel with custom header
</Panel>

<Panel className="bg-neutral-10" header={<h2>Custom Title</h2>} actions={<div><button>Go</button><button>Stop</button></div>}>
  Base Panel with custom header and actions
</Panel>

<Panel className="bg-neutral-10" footer='footer'>
  Base Panel with footer
</Panel>

<Panel className="bg-neutral-8" padding="paxxl">
  <p>Base Panel</p>
</Panel>

<Panel className="bg-neutral-8" scrollable={100}>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
</Panel>

<Panel className="bg-neutral-8" scrollable={true}>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
  <p>Scrollable Panel</p>
</Panel>
```

## Simple

```
import {SimplePanel} from 'pui-react-panels';
```

```react_example_table
<SimplePanel>
  Simple Panel
</SimplePanel>
```

## Basic

```
import {BasicPanel} from 'pui-react-panels';
```

```react_example_table
<BasicPanel>
  Basic Panel
</BasicPanel>

<BasicPanel header='Basic Title'>
  Basic Panel
</BasicPanel>
```

## Basic Panel Alt

```
import {BasicPanelAlt} from 'pui-react-panels';
```

```react_example_table
<BasicPanelAlt>
  Basic Panel
</BasicPanelAlt>

<BasicPanelAlt header='Basic Alt Title'>
  Basic Panel
</BasicPanelAlt>
```

## Panel Title

```
import {PanelTitle, BasicPanelAlt} from 'pui-react-panels';
```

All Panels accept a `header` property. If `header` is a string, it will render
a panel title with some default styling using the `PanelTitle` component
internally. If `header` is a react component, it will render the component
without additional style. To create a header with some default title styling,
use the `PanelTitle` component.

```react_example_table
<BasicPanelAlt header={<div><PanelTitle>Panel Title</PanelTitle>subtitle</div>}>
  Basic Panel With Custom Title
</BasicPanelAlt>
```

## Shadow

```
import {ShadowPanel} from 'pui-react-panels';
```

`ShadowPanels` accept a `shadowLevel` property between 1 and 4 (darkest to lightest).
If no `shadowLevel` is set, a default value of 3 is applied.

```react_example_table
<ShadowPanel>Shadow Panel (Defaults to shadow level 3)</ShadowPanel>

<ShadowPanel shadowLevel={1}>Shadow Panel (level 1)</ShadowPanel>

<ShadowPanel shadowLevel={2}>Shadow Panel (level 2)</ShadowPanel>

<ShadowPanel shadowLevel={3}>Shadow Panel (level 3)</ShadowPanel>

<ShadowPanel shadowLevel={4}>Shadow Panel (level 4)</ShadowPanel>
```

## Clickable

```
import {ClickablePanel, ClickableAltPanel} from 'pui-react-panels';
```

```react_example_table
<ClickablePanel>Clickable Panel</ClickablePanel>

<ClickableAltPanel>Clickable Panel (Alt)</ClickableAltPanel>
```

## Highlight

```
import {HighlightPanel} from 'pui-react-panels';
```

```react_example_table
<HighlightPanel>
  Highlight Panel
</HighlightPanel>
```
*/
