import { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { getItemsApiEntries, loadMore } from "./ItemsSlice"
import { getAppFilter, getAppPage, getAppSearch } from "../App/AppSlice";

const imageUrl = ({ image_id }) => {
    return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;
};


const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1;
    background: #1c45475e;
`;

const ItemsWrapper = styled.div`
    overflow: auto;
    height: calc(100vh - 42px - 48px);
    scrollbar-width: thin;
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
        width: 10px;
        border-radius: 12px;
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

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #1c454752;
    padding: 12px;
    text-align: left;
    flex-direction: column;
    &:hover {
        background: #1c454729;
    }
`;

const ItemTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    background: #1c4547;
    color: white;
    padding-bottom: 6px;
    display: flex;
    height: 28px;
    overflow: hidden;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding-left: 7px;
    padding-top: 6px;
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 15px;
    padding: 7px 0px;
`;


const ItemImage = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    ${props => `
        background-image: url(${props.image})
    `}
`;


const ItemDescription = styled.div`
    flex: 1;
    color: #000000ba;
`;

const ItemNoRecordWrapper = styled.div`
    display: flex;
    height: 50vh;
    align-items: center;
    justify-content: center;
`;

const ItemLoadMore = styled.div`
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #4d7173;
    }
`;

export default function Items({ }) {
    const itemsRef = useRef(null);
    const apiEntries = useSelector(getItemsApiEntries);
    const page = useSelector(getAppPage);
    const filter = useSelector(getAppFilter);
    const search = useSelector(getAppSearch);
    const dispatch = useDispatch()
    const ScrollToTop = () => {
        itemsRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <ItemsContainer>
            <ItemsWrapper ref={itemsRef}>
                {apiEntries?.data?.length > 0 &&
                    apiEntries.data.map((item) => (
                        <ItemWrapper key={item.id}>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemContainer>
                                <ItemImage image={imageUrl(item)} />
                                <ItemDescription dangerouslySetInnerHTML={{ __html: item.description }} />
                            </ItemContainer>
                        </ItemWrapper>
                    ))}
                {apiEntries?.data?.length === 0 && (
                    <ItemNoRecordWrapper>No records found!</ItemNoRecordWrapper>
                )}
                {apiEntries?.pagination?.total_pages > 0 &&
                    page !== apiEntries?.pagination?.total_pages && (
                        <ItemLoadMore onClick={() => { ScrollToTop(); dispatch(loadMore({ filter, search, page })) }}>Load More</ItemLoadMore>
                    )}
            </ItemsWrapper>
        </ItemsContainer>
    )
}