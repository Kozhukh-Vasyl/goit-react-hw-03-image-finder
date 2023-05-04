import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#45D9F5', '#4DFFF6', '#43E6BA', '#45FFA4', '#3AF271']}
    />
  );
};
