import dynamic from 'next/dynamic';

const DynamicPanoramaOutput = dynamic(() => import('./PanormaOutput'), {
  ssr: false,
});

const SomeParentComponent = () => {
  return (
    <div>
      {/* Other components */}
      <DynamicPanoramaOutput />
      {/* Other components */}
    </div>
  );
};

export default SomeParentComponent;
