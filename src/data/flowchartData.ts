import { Flowchart } from '../types/flowchart';

export const flowchart: Flowchart = {
  start: {
    type: 'intro',
    question: 'Welkom bij de Project Coach',
    next: 'VraagTakenlijst',
    buttons: [{
      text: 'Start',
      url: '#'
    }]
  },
  VraagTakenlijst: {
    type: 'question',
    question: 'Heb je een takenlijst gemaakt voor je project?',
    yes: 'VraagPlanning',
    no: 'ActieTakenlijst'
  },
  ActieTakenlijst: {
    type: 'question',
    activity: 'Maak eerst een takenlijst voor je project',
    endpoint: true,
    buttons: [{
      text: 'Open Template',
      url: 'https://docs.google.com/document/d/11KHVabSL66jg_E_y-bpeImjQ5rvi3wZZbBAHKJ7Akdc/edit?tab=t.0'
    }]
  }
  // We'll add more nodes as we progress
}; 