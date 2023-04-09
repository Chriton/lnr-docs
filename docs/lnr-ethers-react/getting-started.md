---
sidebar_position: 2
---

# Getting Started

1. #### Install @linagee/lnr-ethers-react as a dependency in your React project:

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

2. #### Set LnrConfigProvider as a wrapper for your app

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

3. #### Use the hooks or utils functions in your components to get the data you need as described in the [hooks](../category/hooks) and [utils](../category/utils) sections.