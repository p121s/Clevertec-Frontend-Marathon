import { useResize } from '../../hooks/use-resize';
import searchImg from '../../images/svg/search.svg';

import { ButtoOpenProps } from './button-open-search-input.interfaces';
import * as S from './button-open-search-input.styled';

export const ButtonOpenSearchInput = ({isVisible, onClick}: ButtoOpenProps) => {
    const {isMobile} = useResize();

    return (
        <S.ButtonOpenStyled isMobile={isMobile} isVisible={isVisible} onClick={onClick} data-test-id='button-search-open'>
            <img src={`${searchImg}`} alt='search' />
        </S.ButtonOpenStyled>
    );
}