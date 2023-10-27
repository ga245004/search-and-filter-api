import { useRef } from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getAppSearch, setSearch } from "../App/AppSlice";

const SearchBar = styled.div`
    background: #1c4547;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 8px 10px;
    position: relative;
    box-shadow: 0px 10px 10px 0px #0000002b;
`;

const SearchBarIcon = styled.span`
    position: absolute;
    left: 10px;
    top: 8px;
    width: calc(32px - 12px);
    height: calc(32px - 12px);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
`;

const SearchBarCloseIcon = styled(SearchBarIcon)`
    right: 132px;
    left: unset;
`;

const SearchBarText = styled.input.attrs(props => ({
    type: "text",
    placeholder: props.placeholder || "search by title...",
}))`
    flex: 1 1;
    padding-left: 32px;
    border-radius: 25px 25px 25px 25px;
    border: none;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding-right: 124px;
`;


const SearchBarButton = styled.button`
    user-select: none;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0px;
    padding-bottom: 0px;
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 1px 25px 25px 1px;
    border: none;
    background: #1c4547de;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 32px;

    &:hover {
        cursor: pointer;
        background: #1c454791;
    }
`;

export default function Search({ }) {
    const searchRef = useRef(null);
    const dispatch = useDispatch();
    const search = useSelector(getAppSearch);
    return (
        <SearchBar>
            <SearchBarIcon>
                <IoSearchSharp size={24} />
            </SearchBarIcon>
            <SearchBarText ref={searchRef}
                onKeyDown={(event) =>
                    event.key === "Enter" && dispatch(setSearch(searchRef.current.value))
                }
            />
            {search && (
                <SearchBarCloseIcon onClick={() =>{
                    dispatch(setSearch(""));
                    searchRef.current.value = "";
                }}>
                    <IoCloseSharp size={24} />
                </SearchBarCloseIcon>
            )}
            <SearchBarButton type="button"
                onClick={(e) => dispatch(setSearch(searchRef.current.value))}
            >Search</SearchBarButton>
            <Filter />
        </SearchBar>
    )
}