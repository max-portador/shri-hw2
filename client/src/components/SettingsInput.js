import React, {forwardRef} from 'react'


export const SettingsInput = forwardRef((props, ref) => {
    return <input  type="search"  {...props}
                ref={ref} />
})