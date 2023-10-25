import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types.d'
import diaryData from './diary.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: Number): DiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)
  if (entry != null) {
    const { ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiary: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id + 1)),
    ...newDiary
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
