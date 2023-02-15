import * as S from './loader-styled';

export const Loader = (): JSX.Element => <S.WrapperLoader>
    <S.Loader data-test-id='loader'> </S.Loader>
</S.WrapperLoader>;