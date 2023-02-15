import facebook from '../../images/svg/facebook.svg';
import linkedIn from '../../images/svg/linked-in.svg';
import telegram from '../../images/svg/telegram.svg';
import vk from '../../images/svg/vk.svg';

import * as S from './footer-styled';

export const Footer = () => (
    <S.Footer>
        <S.CoryWriteBlock>© 2020-2023 Cleverland. Все права защищены.</S.CoryWriteBlock>
        <S.SocialBlock>
            <img src={facebook} alt='facebook' />
            <img src={telegram} alt='telegram' />
            <img src={vk} alt='vk' />
            <img src={linkedIn} alt='linkedIn' />
        </S.SocialBlock>
    </S.Footer>
)