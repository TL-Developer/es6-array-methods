import { Quiz, TQuiz, TRespostas } from './Quiz';

export class Some extends Quiz {
  constructor (
    quiz: TQuiz,
    acertouTodas: boolean = false,
  ) {
    super(quiz, acertouTodas);
  }

  run(): void {
    this.acertouTodas = this.quiz.respostas.some((resposta: TRespostas) => {
      return resposta.ok;
    });
  }
};
