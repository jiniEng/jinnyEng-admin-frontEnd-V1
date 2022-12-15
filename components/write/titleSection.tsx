import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { writePostDataRecoil } from "utils/store/writePost/writePost";

const TitleSection = () => {
  const [writePostData, setWritePostData] = useRecoilState(writePostDataRecoil);

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setWritePostData((pre) => ({ ...pre, title: value }));
  };

  return (
    <Section>
      <Label>제목</Label>
      <SubLabel>게시글의 제목을 작성해주세요.</SubLabel>
      <TitleInput value={writePostData.title} onChange={changeTitle} />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: fit-content;
  margin-top: 70px;
`;

const SubLabel = styled.p`
  font-size: 18px;
  color: #555555;
  padding-bottom: 20px;
`;

const Label = styled(SubLabel)`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 3px;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 55px;
  padding: 0 15px;
  border: 1px solid #000;
  border-radius: 5px;

  font-weight: bold;
  font-size: 24px;
`;

export default TitleSection;
