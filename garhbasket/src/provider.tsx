// 'use client'

// import { SessionProvider } from 'next-auth/react'
// import React from 'react'

// function Provider({children}: {children: React.ReactNode}) {
//   return (
//     <SessionProvider>
//         {children}
//     </SessionProvider>
//   )
// }

// export default Provider

'use client'

import { SessionProvider } from 'next-auth/react'
import { Provider as ReduxProvider } from 'react-redux'  // ✅ add this
import { store } from '@/redux/store'                    // ✅ add this
import React from 'react'

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>  {/* ✅ wrap children with Redux */}
        {children}
      </ReduxProvider>
    </SessionProvider>
  )
}

export default Provider