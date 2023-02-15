import { InfoTablesProps } from './info-tables-interfaces';
import * as S from './info-tables-styled';

export const InfoTables = ({ data }: InfoTablesProps): JSX.Element => {
  const { publish, issueYear, pages, cover, format, categories, weight, ISBN, producer } = data;

  return (
    <S.WrapperTables>
      <S.Table>
        <tbody>
          <S.Tr>
            <S.TdName>Издательство</S.TdName>
            <S.TdData>{publish}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Год издания</S.TdName>
            <S.TdData>{issueYear}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Страниц</S.TdName>
            <S.TdData>{pages}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Переплёт</S.TdName>
            <S.TdData>{cover}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Формат</S.TdName>
            <S.TdData>{format}</S.TdData>
          </S.Tr>
        </tbody>
      </S.Table>
      <S.Table>
        <tbody>
          <S.Tr>
            <S.TdName>Жанр</S.TdName>
            <S.TdData>{categories.join(', ')}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Вес</S.TdName>
            <S.TdData>{weight}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>ISBN</S.TdName>
            <S.TdData>{ISBN}</S.TdData>
          </S.Tr>
          <S.Tr>
            <S.TdName>Изготовитель</S.TdName>
            <S.TdData>{producer}</S.TdData>
          </S.Tr>
        </tbody>
      </S.Table>
    </S.WrapperTables>
  );
};
