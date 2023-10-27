import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Header from "../Header/Header";
import Search from "../Search/Search";
import Items from "../Items/Items";
import styled from "styled-components";
import { fetchItems } from "../Items/ItemsSlice";
import { getAppFilter, getAppSearch } from "./AppSlice";

const AppWrapper = styled.div`
    font-family: Open Sans, sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1;
`;

export default function App() {
    const filter = useSelector(getAppFilter);
    const search = useSelector(getAppSearch);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchItems({ filter, search }));
    }, [filter, search]);

    return (
        <AppWrapper>
            <Header appName={"Search & Filter APIs"} />
            <Search />
            <Items />
        </AppWrapper>
    );
}
