import figlet from 'figlet';

export const showTitle = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    figlet(text, (error, data) => {
      if (error) {
        return console.error(error);
      }
      console.log(data);
      resolve();
    });
  });
};
