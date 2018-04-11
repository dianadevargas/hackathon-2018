import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'hui/dist/styled/theme';
import {
    Section,
    Row,
    Col,
    Container,
    HeadingFour,
    Button,
    Card,
    Paragraph
} from 'hui/dist/styled/';

const StyledAnchor = styled.a`
  display: inline-block;
  color: ${colors.HIPAGES_ORANGE};
  text-decoration: none;
`;
const DetailText = styled.div`
  margin-top: 1em;
  font-size: 12px;
  color: ${colors.MEDIUM_DARK_GREY};
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.md}rem) {
    display: block;
  }
`;
const StyledHR = styled.hr`
  border: 0;
  border-top: 1px solid #ddd;
`;

const HeaderContainer = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  display: inline-block;
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.md}rem) {
    padding: 10px 0;
    background-color: transparent;
  }
`;
const Thumbnail = styled.img`
  max-height: 58px;
  max-width: 83px;
`;
const StyledRow = Row.extend`
  margin-left: 0 !important;
  margin-right: 0 !important;
`;

const Question = ({ title, children }) =>
    <Col xs={12} md={8} gutter={0}>
        <Row gutter={0}>
            <StyledLabel>
                {title}
            </StyledLabel>
        </Row>
        {children &&
        <Row gutter={0}>
            <Paragraph>
                {children}
            </Paragraph>
        </Row>}
    </Col>;

Question.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string
};

const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
`;
const Answer = ({ children, selected }) =>
    <Col xs={6} md={2} mt={{ xs: 1, md: 0 }}>
        <Button muted={!selected} secondary={selected} block style={{ borderRadius: '4px' }}>
            <StyledLabel>
                {children}
            </StyledLabel>
        </Button>
    </Col>;
Answer.propTypes = {
    children: PropTypes.string.isRequired,
    selected: PropTypes.bool
};
const StyledQuestionRow = StyledRow.extend`
  margin-top: 1rem;
`;

const FeedbackForm = ({ connection }) =>
    <Row style={{ width: '100%' }} m={{ xs: 0 }}>
        <Card snow mb={{ md: '20px' }} mt={0}>
            <Section mb={1}>
                <Row style={{ display: 'flex', alignItems: 'center' }} gutter={0}>
                    <Thumbnail src={connection.thumbnail} />
                    <Col>
                        <StyledRow>
                            <StyledLabel>
                                {connection.siteName}
                            </StyledLabel>
                        </StyledRow>
                        {connection.numberOfRecommendations > 0 &&
                        <StyledRow>
                            <StyledAnchor href={`/connect/${connection.siteKey}/recommendations`}>
                                {connection.numberOfRecommendations} Recommendation{connection.numberOfRecommendations > 1 ? 's' : ''}
                            </StyledAnchor>
                        </StyledRow>}
                    </Col>
                </Row>
            </Section>
            <StyledHR />
            <Section>
                <Row gutter={0}>
                    <HeadingFour>How is your job progressing?</HeadingFour>
                </Row>
                <StyledQuestionRow>
                    <Question title={'Has this business contacted you yet?'} />
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Has this business provided you with a quote?'} />
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Did you hire, or are you going to hire this tradie?'} />
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
            </Section>
            <StyledHR />
            <Section>
                <StyledRow>
                    <HeadingFour>Rate your experience</HeadingFour>
                </StyledRow>
                <StyledRow>
                    <Paragraph>
                        This feedback will be shared with the tradie and may be published on the website.
                    </Paragraph>
                </StyledRow>
                <StyledQuestionRow>
                    <Question title={'Do you recommend this business?'}>
                        If you hired or used this tradie, this will contribute to their star rating.
                    </Question>
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Punctuality'}>
                        Did they show up on time, send quote on time, or called if running late?
                    </Question>
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Quality'}>Were you satisfied with the quality of the work?</Question>
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Value'}>Did they provide good value for money?</Question>
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
                <StyledQuestionRow>
                    <Question title={'Professionalism'}>Did they act in a professional manner?</Question>
                    <Answer>Yes</Answer>
                    <Answer>No</Answer>
                </StyledQuestionRow>
            </Section>
        </Card>
    </Row>;
FeedbackForm.propTypes = {
    connection: PropTypes.object.isRequired
};

export class Feedback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            connections: [
                {
                    id: 27492709,
                    jobId: 857828,
                    status: 3,
                    connectedDate: "2018-03-29 14:06:14",
                    siteKey: "apexairconditioning",
                    siteName: "Apex Air Conditioning",
                    siteActive: true,
                    thumbnail: "https://mediacache.homeimprovementpages.com.au/creative/sites/90001_95000/91671/thumbnail.gif",
                    siteId: 91671,
                    messageGroupId: 6,
                    numberUnreadMessages: 0,
                    messageId: 17,
                    numberOfRecommendations: 1,
                    contactName: "",
                    phone: "0438843721",
                    mobile: "0438843721"
                }
            ]
        }
    }

    render() {
        return (
            <Container p={0} m={{ xs: 0, md: 'auto' }} style={{ minWidth: 320, width: '100vw' }}>
                <Row style={{ width: '100%' }} m={{ xs: 0 }}>
                    <HeaderContainer>
                        <StyledAnchor>
                            {`‹ Back to my job`}
                        </StyledAnchor>
                        <DetailText>You can update your feedback at any time.</DetailText>
                    </HeaderContainer>
                </Row>
                {this.state.connections.map(connection => <FeedbackForm key={connection.id} connection={connection} />)}
            </Container>
        );
    }
}
