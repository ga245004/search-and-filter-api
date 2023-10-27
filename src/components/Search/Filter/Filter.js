import { useState } from "react";
import styled from "styled-components";
import { IoFilterSharp } from "react-icons/io5";
import { setFilter } from "../../App/AppSlice";
import { useDispatch, useSelector } from "react-redux";

const ANIMAL_FILTER_LIST = `Dogs, Cats, Birds, Fish, Cows, Donkeys, Horses, Chickens, Sheep, Goats`
    .split(",")
    .map((i) => i.trim());

const SearchBarFilterIcon = styled.span`
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    right: 98px;
    top: 8px;
    width: calc(32px - 12px);
    height: calc(32px - 12px);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    ${props => props.isFiltered && `
    color: white;
    background: #1c4547eb;
    `}
`;

const FilterContainer = styled.div`
    user-select: none;
    position: absolute;
    top: 43px;
    right: 98px;
    width: 200px;
    height: 200px;
    background: #698688;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #879d8785;
`;


const FilterHeader = styled.div`
    margin: 9px 0px;
    font-size: 16px;
    color: white;
    font-weight: 500;
    border-bottom: 1px solid;
    padding-bottom: 8px;
`;

const FilterItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-y: auto;
    height: 150px;

    
    &::-webkit-scrollbar {
        width: 10px;
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 12px;
    }
  
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        background-color: #1c4547;
    }
  
`;


const FilterItem = styled.div`
    display: flex;
    align-items: center;
`;

const FilterItemCheckbox = styled.input.attrs(props => ({
    type: "checkbox",
    readOnly: true,
}))`
    zoom: 1.5;
`;

const FilterItemLabel = styled.label`
    
`;



export default function Filter({ }) {
    const dispatch = useDispatch();
    const [showFilter, setShowFilter] = useState(false);
    const filter = useSelector((state) => state.app.filter);

    const OnFilterIconClick = () => {
        setShowFilter(!showFilter);
        setTimeout(() => {
            !showFilter &&
                filter &&
                document.getElementById(`filter-${filter}`).scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
        }, 200);
    }

    const OnFilterItemClick = (f) => {
        if (filter === f) {
            dispatch(setFilter(""));
        } else {
            dispatch(setFilter(f));
        }
    }

    return (
        <>
            <SearchBarFilterIcon
                isFiltered={!!filter}
                onClick={() => OnFilterIconClick()}
                title="Filter"
            >
                <IoFilterSharp size={24} />
            </SearchBarFilterIcon>
            {showFilter && (
                <FilterContainer>
                    <FilterHeader>Filter by Animal</FilterHeader>
                    <FilterItemWrapper>
                        {ANIMAL_FILTER_LIST.map((f) => (
                            <FilterItem
                                id={`filter-${f}`}
                                key={f}
                                onClick={() => OnFilterItemClick(f)}
                            >
                                <FilterItemCheckbox checked={filter === f} />
                                <FilterItemLabel>{f}</FilterItemLabel>
                            </FilterItem>
                        ))}
                    </FilterItemWrapper>
                </FilterContainer>
            )}
        </>
    )
}