import React, { createContext, useContext, useMemo, useState } from 'react';

interface NeighborhoodContextValue {
  isFollowing: (neighborId: string) => boolean;
  toggleFollow: (neighborId: string) => void;
}

const NeighborhoodContext = createContext<NeighborhoodContextValue | null>(null);

export const NeighborhoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [followed, setFollowed] = useState<string[]>([]);

  const value = useMemo<NeighborhoodContextValue>(
    () => ({
      isFollowing: (neighborId) => followed.includes(neighborId),
      toggleFollow: (neighborId) => {
        setFollowed((current) =>
          current.includes(neighborId)
            ? current.filter((id) => id !== neighborId)
            : [...current, neighborId],
        );
      },
    }),
    [followed],
  );

  return (
    <NeighborhoodContext.Provider value={value}>
      {children}
    </NeighborhoodContext.Provider>
  );
};

export const useNeighborhood = () => {
  const value = useContext(NeighborhoodContext);
  if (!value) {
    throw new Error('useNeighborhood must be used inside NeighborhoodProvider');
  }
  return value;
};
