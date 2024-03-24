export const DepartmentData: DepartmentDataModel[] = [
    {
        title: 'Experience DIV.',
        titleKor: '익스피리언스 부문',
        teams: ['X1', 'X2', 'X3', 'DIG'],
        introduction: 'A team that communicates with brands to create thrilling experiences.',
        introductionKor: '브랜드와 소통하여 사람들을 전율시키는 경험을 창조하는 팀',
    },
    {
        title: 'Emerging Project Div.',
        titleKor: '이머징프로젝트 부문',
        teams: ['Emerging 1', 'Emerging 2'],
        introduction: 'A team that leads innovative projects and creates creative outcomes based on art and culture.',
        introductionKor: '예술과 문화를 기반으로 혁신적인 프로젝트를 리드하고, 창의적인 결과물을 만드는 팀',
    },
    {
        title: 'Creative Div.',
        titleKor: '크리에이티브 부문',
        teams: ['Brand Creative', 'Space Creative', 'Digital Creative'],
        introduction: 'A team that produces all visual outcomes in a creative way.',
        introductionKor: '창의적인 방식으로 모든 시각적인 결과물을 만들어 내는 팀',
    },
    {
        title: 'FIGIF Team',
        titleKor: '피이그이프 팀',
        introduction: 'A team that creates new creative outcomes at the boundary between imagination and realization.',
        introductionKor: '상상과 실현의 경계에서 크리에이티브의 새로운 결을 만들어 내는 팀.',
    },
    {
        title: 'Content Team',
        titleKor: '콘텐츠 팀',
        teams: ['Production', 'Motion Graphic'],
        introduction: 'The team that expresses the cutting edge of content in writing and video.',
        introductionKor: '콘텐츠의 최첨단을 글과 영상으로 표현해내는 팀',
    },
    {
        title: 'Administration Div.',
        titleKor: '경영관리 부문',
        introduction:
            'A team that plans FIG to become an organization that can achieve greater success and allows all members to feel a deeper sense of accomplishment.',
        introductionKor: '피이그가 더 큰 성공을 거두고 구성원 모두가 더 깊은 성취감을 느낄 수 있는 조직이 될 수 있도록 계획, 구성하는 팀',
    },
]

const newArr = JSON.parse(JSON.stringify(DepartmentData))
type DepartmentDataKeyType = keyof typeof newArr

type DepartmentDataModel = {
    title: string
    titleKor: string
    teams?: string[]
    introduction: string
    introductionKor: string
}
