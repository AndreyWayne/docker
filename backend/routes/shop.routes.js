const Router = require('express');
const router = new Router();

const shopController = require('../controller/shop.controller');

router.get('/shop/all', shopController.getAll);
router.get('/shop/allLimit', shopController.getAllLimit);
router.get('/shop/max', shopController.getMax);
router.get('/shop/count', shopController.getCount);
router.get('/shop/in', shopController.getIN);
router.get('/shop/between', shopController.getBetween);
router.get('/shop/all/sort', shopController.getAllSort);
router.get('/shop/detail/:id', shopController.getId);
router.get('/shop/filter', shopController.getAllFilter);

router.post('/shop/create', shopController.create);

router.put('/shop/update/:id', shopController.update);

router.delete('/shop/delete/:id', shopController.delete);
router.get('/shop/join', shopController.join);
router.get('/shop/union', shopController.union);

module.exports = router;