import { rest } from "msw";
export const handlers = [
  rest.get("/letters", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: 1,
            writer: "익명",
            title: "즐거운 크리스마스",
            content: "해피해피 크리스마스",
            passwordHint: "크리스마스",
            password: "1225",
          },
          {
            id: 2,
            writer: "우영",
            title: "웹이들 안뇽",
            content: "31기 웨비들과 함께한 날들은 청춘이었어!",
            passwordHint: "우리는 몇기일까요?",
            password: "31",
          },
          {
            id: 3,
            writer: "비밀",
            title: "비밀이닷",
            content: "이것은 비밀편지얌!",
            passwordHint: "우영이 생일",
            password: "0830",
          },
        ],
      })
    );
  }),
  rest.get("/letters/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        writer: "익명",
        title: "즐거운 크리스마스",
        content: "해피해피 크리스마스",
        passwordHint: "크리스마스",
        password: "1225",
      })
    );
  }),
  rest.get("/letters/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 2,
        writer: "우영",
        title: "웹이들 안뇽",
        content: "31기 웨비들과 함께한 날들은 청춘이었어!",
        passwordHint: "우리는 몇기일까요?",
        password: "31",
      })
    );
  }),
  rest.get("/letters/3", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 3,
        writer: "비밀",
        title: "비밀이닷",
        content: "이것은 비밀편지얌!",
        passwordHint: "우영이 생일(월일)",
        password: "0830",
      })
    );
  }),
];
