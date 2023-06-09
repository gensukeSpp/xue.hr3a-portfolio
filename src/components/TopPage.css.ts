import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const menuItem = {
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    // https://teratail.com/questions/193795より、
    // しっかり横幅を持つ
    position: 'fixed',
    width: '100%',
  }),
  link: style({
    textDecoration: 'initial',
    fontWeight: 'bold',
  }),
};
export const rootWrap = style({
  width: '76vw',
  margin: '0 auto',
});

export const introduction = {
  photo: style({
    objectFit: 'cover',
    aspectRatio: '16/9',
  }),
  catalyst: style({
    fontSize: '0.9rem',
    width: '45vw',
    margin: '0 auto',
  }),
};

// const themeVars = createGlobalTheme("", {
// 	colors: {
// 		programming: "yellow",
// 		tryze: "skyblue",
// 		enviorment: "limegreen",
// 		study: "gray"
// 	}
// });

export const recipeVar = recipe({
  base: {},
  variants: {
    underBarColors: {
      programming: {
        textDecorationColor: 'yellow',
      },
      dtp: {
        textDecorationColor: 'skyblue',
      },
      enviorment: {
        textDecorationColor: 'limegreen',
      },
      study: {
        textDecorationColor: 'lightgray',
      },
    },
  },
});
export const skill = {
  h4skill: style({
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  }),
  wrap: style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }),
  // columun: style({
  // 	width: "30%"
  // }),
  title: style({
    fontSize: '1.5rem',
    textDecorationLine: 'underline',
    textDecorationThickness: '0.5rem',
    // textDecorationColor: "yellow",
    textUnderlineOffset: '-0.25rem',
    textDecorationSkipInk: 'none',
    textAlign: 'center',
  }),
  // link: style({
  //   color: 'blue',
  //   textDecoration: 'underline'
  // })
};

export const footer = {
  contactWrap: style({
    paddingLeft: '10%',
  }),
  h4contact: style({
    fontSize: '1.7rem',
    fontWeight: 'bold',
  }),
  beltWrap: style({
    backgroundColor: 'burlywood',
  }),
  copyright: style({
    color: 'white',
    fontSize: '0.75rem',
    lineHeight: '4',
    textAlign: 'center',
  }),
};
