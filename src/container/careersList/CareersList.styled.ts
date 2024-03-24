import { mediaQuery } from "@styles/mediaQuery";
import theme from "@styles/theme";
import styled from "styled-components";
const ApplyLink = styled.span`
  display: inline-flex;
  gap: 4px;
  align-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  color: ${theme.colors.gray7};
  user-select: none;
`;
const ChipBlock = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 6px;
  user-select: none;
  .chip {
    display: inline-flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    font-size: 1.2rem;
    color: ${theme.colors.character_developer};
    height: var(--recruit_chip_height);
    border: 1px solid rgba(22, 214, 167, 0.6);
    border-radius: 999px;
    padding-inline: 8px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  line-height: var(--recruit_list_item_height);
  ${mediaQuery("mobile")} {
    line-height: var(--recruit_chip_height);
  }
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: var(--recruit_list_item_height);
  gap: var(--recruit_item_container_gap);
  height: var(--recruit_list_item_height);
  border-bottom: 1px solid ${theme.colors.gray11};
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      ${ApplyLink} {
        color: ${theme.colors.gray4};
        svg path {
          fill: ${theme.colors.gray4};
        }
      }
    }
  }
  ${mediaQuery("mobile")} {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    height: auto;
    padding-block: 20px;
  }
`;
const List = styled.ul`
  width: 100%;
`;
const Container = styled.div`
  --recruit_list_item_height: 50px;
  --recruit_chip_height: 22px;
  --recruit_item_container_gap: 20px;
  width: 100%;
  padding-bottom: 80px;
  ${mediaQuery("mobile")} {
    --recruit_item_container_gap: 8px 10px;
    --recruit_list_item_height: initial;
  }
`;
export const CareersListComponent = {
  Container,
  List,
  Item,
  ChipBlock,
  ApplyLink,
  Title,
};
