import { Quiz, TQuiz, TRespostas } from './Quiz';

export class Every extends Quiz {
  constructor (
    quiz: TQuiz,
    acertouTodas: boolean = false,
  ) {
    super(quiz, acertouTodas);
  }

  run(): void {
    this.acertouTodas = this.quiz.respostas.every((resposta: TRespostas) => {
      return resposta.ok;
    });
  }
};
