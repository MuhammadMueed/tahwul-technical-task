import {
  Autorenew,
  CheckCircleOutlineOutlined,
  CloudUploadOutlined,
  DescriptionOutlined,
  FolderOutlined,
  HourglassEmpty,
  InsertChartOutlined,
  ListAlt,
  TaskAltOutlined,
} from '@mui/icons-material';

export const timelineSteps = [
  {
    date: 'Mar 17',
    title: 'Kickoff Workshop',
    status: 'completed',
  },
  {
    date: 'March 18',
    title: 'Data Collection',
    status: 'completed',
  },
  {
    date: 'May 8',
    title: 'Initial Phase',
    status: 'pending',
  },
  {
    date: 'May 9–July 12',
    title: 'Verification',
    status: 'pending',
  },
  {
    date: 'July 13',
    title: 'Completion Reviews',
    status: 'pending',
  },
  {
    date: 'August 21',
    title: 'Cycle Conclusion',
    status: 'pending',
  },
];

export const statsData = [
  {
    label: 'Overall Progress',
    value: '78.65%',
    icon: <InsertChartOutlined sx={{ fontSize: '24px' }} />,
  },
  {
    label: 'Total Criteria',
    value: 95,
    icon: <FolderOutlined sx={{ fontSize: '24px' }} />,
  },
  {
    label: 'Completed Criteria',
    value: 52,
    icon: <TaskAltOutlined sx={{ fontSize: '24px' }} />,
  },
  {
    label: 'Evidence Documents',
    value: 386,
    icon: <DescriptionOutlined sx={{ fontSize: '24px' }} />,
  },
  {
    label: 'Evidence (Completed)',
    value: 302,
    icon: <CheckCircleOutlineOutlined sx={{ fontSize: '24px' }} />,
  },
  {
    label: 'Uploaded To DGA',
    value: 258,
    icon: <CloudUploadOutlined sx={{ fontSize: '24px' }} />,
  },
];

export const STATUS_COLORS = {
  notStarted: '#9AA6B2',
  inProgress: '#F59F0A',
  completed: 'success.main',
  partiallyUploaded: '#0F4C81',
  fullyUploaded: '#0078D7',
  delayed: 'error.main',
};

export const progressStatusData = [
  {
    title: 'Strategy And Planning',
    percentage: '97.78%',
    sections: [
      {
        title: 'Digital Transformation',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ],
      },
      {
        title: 'Digital Governance',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'inProgress' },
        ],
      },
      {
        title: 'Enterprise Architecture',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Organization And Culture',
    percentage: '70.83%',
    sections: [
      {
        title: 'Digital Culture And Environment',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'completed' },
        ],
      },
      {
        title: 'Leadership Development',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
      {
        title: 'Skills & Capacity Building',
        items: [
          { id: 1, status: 'inProgress' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ],
      },
    ],
  },

  {
    title: 'Operations And Execution',
    percentage: '80.00%',
    sections: [
      {
        title: 'Business Processes',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Business Continuity',
    percentage: '90.59%',
    sections: [
      {
        title: 'Risk Management',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
        ],
      },
      {
        title: 'Business Continuity',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'notStarted' },
          { id: 3, status: 'notStarted' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'notStarted' },
          { id: 7, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Information Technology',
    percentage: '75.00%',
    sections: [
      {
        title: 'Support Systems',
        items: [
          { id: 1, status: 'fullyUploaded' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
      {
        title: 'IT Infrastructure',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
          { id: 5, status: 'fullyUploaded' },
          { id: 6, status: 'completed' },
        ],
      },
      {
        title: 'Cloud Infrastructure',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'fullyUploaded' },
        ],
      },
    ],
  },

  {
    title: 'Comprehensive Governance',
    percentage: '64.44%',
    sections: [
      {
        title: 'Governance Platforms',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'notStarted' },
          { id: 5, status: 'completed' },
          { id: 6, status: 'completed' },
          { id: 7, status: 'completed' },
          { id: 8, status: 'completed' },
          { id: 9, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Channels And Services',
    percentage: '100%',
    sections: [
      {
        title: 'Service Quality',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
        ],
      },
      {
        title: 'Digital Channels',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'completed' },
          { id: 4, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Beneficiary Centralization',
    percentage: '60.00%',
    sections: [
      {
        title: 'User Engagement',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
          { id: 4, status: 'inProgress' },
        ],
      },
      {
        title: 'User Relationship',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ],
      },
      {
        title: 'User Experience',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
          { id: 4, status: 'inProgress' },
          { id: 5, status: 'completed' },
        ],
      },
    ],
  },

  {
    title: 'Government Data',
    percentage: '87.50%',
    sections: [
      {
        title: 'Data Governance',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'inProgress' },
          { id: 3, status: 'inProgress' },
        ],
      },
      {
        title: 'Data Usage & Availability',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'inProgress' },
        ],
      },
      {
        title: 'Open Data',
        items: [
          { id: 1, status: 'completed' },
          { id: 2, status: 'completed' },
          { id: 3, status: 'inProgress' },
        ],
      },
    ],
  },

  {
    title: 'Research And Innovation',
    percentage: '17.65%',
    sections: [
      {
        title: 'Innovation',
        items: [
          { id: 1, status: 'delayed' },
          { id: 2, status: 'delayed' },
          { id: 3, status: 'delayed' },
          { id: 4, status: 'delayed' },
        ],
      },
      {
        title: 'Creative Solutions',
        items: [
          { id: 1, status: 'inProgress' },
          { id: 2, status: 'inProgress' },
        ],
      },
    ],
  },
];

export const performingleaders = [
  {
    name: 'Ahmed AI-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
  },
  {
    name: 'Sarah AI-Khaled',
    perspective: 'Beneficiary Perspective',
    score: 94,
  },
  {
    name: 'Mohammad AI-Mansour',
    perspective: 'IT Perspective',
    score: 92,
  },
];

export const activitiesData = [
  {
    id: 1,
    title: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled',
    time: '5 Mins Ago',
  },
  {
    id: 2,
    title: 'Task "Review Compliance Files" Was Assigned To Mona Hamed',
    time: '20 Mins Ago',
  },
  {
    id: 3,
    type: 'criterion',
    title: 'New Criterion "5.3 Digital Identity" Was Created By Admin',
    time: '1 Hour Ago',
  },
];

export const perspectiveStatsData = [
  {
    id: 1,
    count: 4,
    title: 'Total Evidence',
    icon: <ListAlt />,
  },
  {
    id: 2,
    count: 3,
    title: 'Under Review Evidence',
    icon: <HourglassEmpty sx={{ fontSize: '24px' }} />,
  },
  {
    id: 3,
    count: 2,
    title: 'In Progress Evidence',
    icon: <Autorenew sx={{ fontSize: '24px' }} />,
  },
  {
    id: 4,
    count: 1,
    title: 'Completed Evidence',
    icon: <CheckCircleOutlineOutlined sx={{ fontSize: '24px' }} />,
  },
];

export const leadersData = [
  {
    id: 1,
    name: 'Ahmed AI-Ali',
    perspective: 'Strategy Perspective',
  },
  {
    id: 2,
    name: 'Ahmed AI-Ali',
    perspective: 'Strategy Perspective',
  },
];

export const commentsData = [
  {
    name: 'Ahmed AI-Ali',
    comment: 'This criterion is well-documented and meets all the requirements. Great work!',
    date: '2025-05-01',
  },
  {
    name: 'Sarah AI-Khaled',
    comment: 'I have some concerns about the evidence provided for this criterion. Can we discuss further?',
    date: '2025-05-02',
  },
];
