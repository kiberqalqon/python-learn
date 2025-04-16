import { View, Text, ToastAndroid, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Content from '../../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services/Index';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';
import { useUser } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ChapterContentScreen() {
  const param = useRoute().params;
  const navigate = useNavigation();
  const { isChapterComplete, setIsChapterComplete } = useContext(CompleteChapterContext)

  const {user}=useUser();

  useEffect(() => {
    console.log("ChapterId", param.chapterId)
    console.log("RecordId", param.userCourseRecordId)

  }, [param])

  const onChapterFinish = () => {

    MarkChapterCompleted(param.chapterId, param.userCourseRecordId,
      user.primaryEmailAddress.emailAddress).then(resp=>{
  
      if (resp) {
        ToastAndroid.show('Chapter Completed!', ToastAndroid.LONG)
        setIsChapterComplete(true)
     
        navigate('MyCourse');
      }
    })
  }
  return param.content && (
    <ScrollView>
     
      <Content content={param.content}
        onChapterFinish={() => onChapterFinish()
        } />
    </ScrollView>
  )
}