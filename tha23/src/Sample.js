import { useCallback, useState } from "react";

export const Sample = (initial) => {
    const [value, setValue] = useState(initial);

    const add = useCallback((a) => setValue((arr) => [...arr, a]), []);
    const clear = useCallback(() => setValue(() => []), []);

    return [value, setValue, add, clear];

    // return {
    //     value,
    //     setValue,
    //     add: useCallback((a) => setValue((arr) => [...arr, a]), []),
    //     clear: useCallback((a) => setValue(() => []), []),
    //     removeById: useCallback((id) => setValue((arr) => arr.filter((v) => v && v.id !== id)), [])
    // };
};
