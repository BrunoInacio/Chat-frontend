import React from 'react';

import {
  Home as HomeIcon, HomeOutlined as HomeIconOutlined,
  Info as InfoIcon, InfoOutlined as InfoIconOutlined,
  Help as HelpIcon, HelpOutlineOutlined as HelpIconOutlined,
  People as PeoplIcon, PeopleOutlined as PeoplIconOutlined,
  Code as CodeIcon, SettingsEthernet as SettingsEthernetIcon,
  QuestionAnswer as QuestionAnswerIcon, QuestionAnswerOutlined as QuestionAnswerIconOutlined,
} from '@material-ui/icons';

export default [
  {
    title: 'Início',
    to: '/home',
    iconSelected: <HomeIcon />,
    icon: <HomeIconOutlined />,
  },
  {
    title: 'Chatbot',
    to: '/chatbot',
    iconSelected: <QuestionAnswerIcon />,
    icon: <QuestionAnswerIconOutlined />,
    divider: true,
  },
  {
    title: 'Dúvidas comuns',
    to: '/questions',
    iconSelected: <HelpIcon />,
    icon: <HelpIconOutlined />,
  },
  {
    title: 'Equipe',
    to: '/team',
    iconSelected: <PeoplIcon />,
    icon: <PeoplIconOutlined />,
  },
  {
    title: 'Tecnologias',
    to: '/tech',
    iconSelected: <SettingsEthernetIcon />,
    icon: <CodeIcon />,
  },
  {
    title: 'Informações',
    to: '/info',
    iconSelected: <InfoIcon />,
    icon: <InfoIconOutlined />,
  }
]
