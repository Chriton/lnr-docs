---
sidebar_position: 2
---

# Getting Started

#### Install @linagee/lnr-ethers-react as a dependency in your React project:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
<TabItem value="npm" label="npm">

```bash
npm install @linagee/lnr-ethers-react
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add @linagee/lnr-ethers-react
```

</TabItem>
</Tabs>

:::tip Note

You need at least react version 18.2.0 to use @linagee/lnr-ethers-react.

:::

---

#### Set LnrConfigProvider as a wrapper for your app

Example:
```typescript jsx

import { AppProps } from 'next/app';
import { ethers } from 'ethers';
import { LnrConfigProvider } from '@linagee/lnr-ethers-react';

function MyApp({ Component, pageProps }: AppProps) {
    const config = {
        provider: new ethers.providers.AlchemyProvider(1, process.env.REACT_APP_ALCHEMY_API
        ),
    };

    return (
        <LnrConfigProvider config={config}>
            <Component {...pageProps} />
        </LnrConfigProvider>
    );
}

export default MyApp;
``` 

:::tip Note

You need to set REACT_APP_ALCHEMY_API in your .env file.
You can set any provider you want, but we recommend using Alchemy.

:::

---


#### Use the hooks in your components to get the data you need

Example:

```typescript jsx
import React from "react";
import { useLnrGetAddress } from "@linagee/lnr-ethers-react";

function MyComponent() {
  const name = "0xhal.og";
  const { address, error, hasError, loading } = useLnrGetAddress(name);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Address: {address}</p>
    </div>
  );
}

export default MyComponent;
```