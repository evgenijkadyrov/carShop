import {useMemo, useState} from "react";

export const useSortCars = (cars = []) => {
    const [descSort, setDescSort] = useState(false)
    const sortedCars = useMemo(() => {
        const copyCars = [...cars]
         copyCars.sort((a, b) => {
            if (+a.price > +b.price) return descSort ? 1 : -1
            if (+a.price < +b.price) return descSort ? -1 : 1
            return 0
        })
        return copyCars
    }, [descSort, cars])
    return {descSort, setDescSort, sortedCars}
}