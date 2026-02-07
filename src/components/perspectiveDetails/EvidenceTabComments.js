import { SendOutlined } from '@mui/icons-material';
import { Box, Button, TextareaAutosize, Typography } from '@mui/material';
import { commentsData } from '../../data/mock-dashboard';
import BoxContainer from '../shared/BoxContainer';

export default function EvidenceTabComments() {
  return (
    <BoxContainer
      title={'Comments'}
      style={{ flex: 2 }}
      body={
        <Box display={'flex'} flexDirection={'column'} gap={3}>
          {commentsData.map(({ name, comment, date }, index) => (
            <BoxContainer
              key={index}
              body={
                <>
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      sx={{
                        borderRadius: '60%',
                        bgcolor: 'divider',
                        height: 24,
                        width: 24,
                        mr: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: 'text.secondary',
                      }}
                    >
                      {name[0]}
                    </Box>
                    <Typography variant="body2" color="text.primary" sx={{ fontWeight: 700, flex: 1 }}>
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400 }}>
                      {date}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 400, mt: 1 }}>
                    {comment}
                  </Typography>
                </>
              }
            />
          ))}
          <TextareaAutosize minRows={6} maxRows={6} className="custom-textarea" />
          <Button variant="contained" startIcon={<SendOutlined />} sx={{ width: 'fit-content', px: 3, borderRadius: 0.63, textTransform: 'none' }}>
            Post Comment
          </Button>
        </Box>
      }
    />
  );
}
