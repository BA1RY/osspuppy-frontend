import {useState} from 'react';
import styled from "styled-components";
import AddTierModal from '../AddTierModal/index';
import CollapsibleList from '../CollapsibleList';
import { BasicButton } from "../Layout/Layout.styles";

const TierContainer = styled.div`
  .px-4;
  .lg: px-32;
  .pt-4;
  .pb-8;
  .mt-4;
  background: #fafafa;
`;

const TierList = styled.div`
  .w-full;
  .p-4;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px 0px;
`;

const TitleContainer = styled.div`
    .flex;
    .justify-between;
    items-center;
`;

const Title = styled.h3`
  .text-2xl;
  .mt-0;
`;

const AddButton = styled(BasicButton)`
  .h-10;
  background: #1ca4e3;
`;

const TierItem = styled.div`
  .p-4;
  .mb-4;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TierTitle = styled.div`
  font-weight: 700;
`;

const RepoName = styled.div`
  font-weight: 700;
  .mt-4;
`;

const TierRepoTitle = styled.u``;
const TierRepoLinks = styled.li`
  .mt-2;
`;

const TierLabel = styled.div``;
const TierRole = styled.div`
  .mt-4;
`;

const TierDesc = styled.div`
  width: 80%;
  .my-4;
`;
const TierRow = styled.div`
  .flex;
  .justify-between;
  .items-center;
`;
const ListItem = styled.div`
.h-10;
.bg-gray-400;
.p-2;
.my-3;
`

const TierDetails = () => {
  const [openAddTierModal, setAddTierModal] = useState(false);
  const ToogleAddTier = () =>{
    setAddTierModal(!openAddTierModal);
  }
  return (
    <TierContainer>
      <TierList>
        <TitleContainer>
          <Title>Tier Details</Title>
          <AddButton onClick={()=>ToogleAddTier()}>Add Tier</AddButton>
          {openAddTierModal && <AddTierModal closeModal={ToogleAddTier}/>}
        </TitleContainer>
        <TierItem>
          <TierRow>
            <TierTitle>5$ a month</TierTitle>
            <TierLabel>Label of Tier</TierLabel>
            <AddButton>Edit Tier</AddButton>
          </TierRow>
          <TierDesc>
            This is the minimal amount to sponser to give me some provision
          </TierDesc>
          <TierRepoTitle>List of Repos and details:</TierRepoTitle>
          <TierRow>
            <RepoName>styled-wind</RepoName>
            <TierRole>Role: Admin</TierRole>
          </TierRow>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
        </TierItem>
        <TierItem>
          <TierRow>
            <TierTitle>5$ a month</TierTitle>
            <TierLabel>Label of Tier</TierLabel>
            <AddButton>Edit Tier</AddButton>
          </TierRow>
          <TierDesc>
            This is the minimal amount to sponser to give me some provision
          </TierDesc>
          <TierRepoTitle>List of Repos and details:</TierRepoTitle>
          <TierRow>
            <RepoName>styled-wind</RepoName>
            <TierRole>Role: Admin</TierRole>
          </TierRow>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRepoLinks>
            <a href="https://github.com/product-ride" target="_blank">
              https://github.com/product-ride
            </a>
          </TierRepoLinks>
          <TierRow>
            <RepoName>styled-wind</RepoName>
            <TierRole>Role: Admin</TierRole>
          </TierRow>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content. Loren Ipsum"/>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content"/>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content"/>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content"/>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content"/>
          <CollapsibleList title="https://github.com/product-ride" content="This is my content"/>
          <ListItem><a href="https://github.com/product-ride" target="_blank">https://github.com/product-ride</a></ListItem>
          <TierRepoLinks><a href="https://github.com/product-ride" target="_blank">https://github.com/product-ride</a></TierRepoLinks>
          <TierRepoLinks><a href="https://github.com/product-ride" target="_blank">https://github.com/product-ride</a></TierRepoLinks>
          <TierRepoLinks><a href="https://github.com/product-ride" target="_blank">https://github.com/product-ride</a></TierRepoLinks>
          <TierRepoLinks><a href="https://github.com/product-ride" target="_blank">https://github.com/product-ride</a></TierRepoLinks>
        </TierItem>
      </TierList>
    </TierContainer>
  );
};

export default TierDetails;
