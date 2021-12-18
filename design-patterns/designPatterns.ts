// factory pattern
type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class RunningShoes implements Shoe {
  purpose = "running";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

let Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker" | "runner"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
      case "runner":
        return new RunningShoes();
    }
  },
};

export const sayShoes = () => {
  const ballet = Shoe.create("balletFlat").purpose;
  console.log(ballet);
};
