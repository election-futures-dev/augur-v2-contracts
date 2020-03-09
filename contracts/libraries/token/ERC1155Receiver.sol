pragma solidity 0.5.15;

import "../../libraries/token/IERC1155Receiver.sol";
import "../../libraries/ERC165.sol";


contract ERC1155Receiver is ERC165, IERC1155Receiver {
    constructor() public {
        _registerInterface(
            ERC1155Receiver(0).onERC1155Received.selector ^
            ERC1155Receiver(0).onERC1155BatchReceived.selector
        );
    }
}
