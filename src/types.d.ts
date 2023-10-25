
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

// una interfaz pude ser extendida.
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// Utilities Type
// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

// interface SpecialDiaryEntry extends DiaryEntry{
//     flightNumber: number
// }
