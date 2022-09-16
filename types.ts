export type Wrapper = {
  children: React.ReactNode;
};

export type UseDisclosure = {
  disclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
};

export interface ProjectsContent {
  [key: string]: {
    heading: string;
    items: [
      {
        link: string;
        name: string;
      }
    ];
  };
}
