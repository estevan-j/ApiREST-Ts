import express from 'express' // EsModules
// const express = require('exr') // commonModules
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addDiaryEntry)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
