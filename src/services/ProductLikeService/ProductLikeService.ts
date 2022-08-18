import {useMutation, useQuery} from '@apollo/client';
import {
  CreateLikesMutation,
  CreateLikesMutationVariables,
  DeleteLikesMutation,
  DeleteLikesMutationVariables,
  LikesByUserForProductQuery,
  LikesByUserForProductQueryVariables,
  Product,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {createLikes, deleteLikes, likesByUserForProduct} from './queries';

const useLikeService = (product: Product) => {
  const {userId} = useAuthContext();

  const {data: userLikeData} = useQuery<
    LikesByUserForProductQuery,
    LikesByUserForProductQueryVariables
  >(likesByUserForProduct, {
    variables: {userID: userId, productID: {eq: product.id}},
  });

  const [doCreateLikes] = useMutation<
    CreateLikesMutation,
    CreateLikesMutationVariables
  >(createLikes, {
    variables: {input: {userID: userId, productID: product.id}},
    refetchQueries: ['LikesByUserForProduct'],
  });

  const [doDeleteLikes] = useMutation<
    DeleteLikesMutation,
    DeleteLikesMutationVariables
  >(deleteLikes);

  const userLike = (userLikeData?.likesByUserForProduct?.items || []).filter(
    like => !like?._deleted,
  )?.[0];

  const toggleLike = () => {
    if (userLike) {
      doDeleteLikes({
        variables: {input: {id: userLike.id, _version: userLike._version}},
      });
    } else {
      doCreateLikes();
    }
  };

  return {toggleLike, isLiked: !!userLike};
};

export default useLikeService;
