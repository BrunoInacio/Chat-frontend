import React from 'react';

import {
  Home as HomeIcon, HomeOutlined as HomeIconOutlined,
  Mail as MailIcon, MailOutlined as MailIconOutlined,
  Info as InfoIcon, InfoOutlined as InfoIconOutlined,
  Help as HelpIcon, HelpOutlineOutlined as HelpIconOutlined,
  People as PeoplIcon, PeopleOutlined as PeoplIconOutlined,
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
    title: 'Entrar em contato',
    to: '/contact',
    iconSelected: <MailIcon />,
    icon: <MailIconOutlined />,
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
    title: 'Informações',
    to: '/info',
    iconSelected: <InfoIcon />,
    icon: <InfoIconOutlined />,
  }
]
